$(function () {
    $('.lazy').Lazy({
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        visibleOnly: true,
        placeholder: "",
        onError: function(element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        }
    })
    $('[data-toggle="tooltip"]').tooltip()
    const lightbox = $('#cover-lightbox')
    const lightboxImg = lightbox.find('.cover-lightbox__img')
    const setLightbox = (src, visible) => {
        lightboxImg.attr('src', src || '')
        lightbox.toggleClass('active', Boolean(visible))
        lightbox.attr('aria-hidden', visible ? 'false' : 'true')
    }
    const closeLightbox = () => setLightbox('', false)
    $('.js-cover-lightbox').on('click', function(event) {
        event.preventDefault()
        const src = $(this).attr('href')
        src && setLightbox(src, true)
    })
    lightbox.on('click', function() {
        closeLightbox()
    })
    $(document).on('keyup', function(event) {
        (event.key === 'Escape') && closeLightbox()
    })
    
    const wrapParentheses = (text) => {
        const result = []
        let i = 0
        while (i < text.length) {
            if (text[i] === '(') {
                let depth = 1
                let start = i
                i++
                while (i < text.length && depth > 0) {
                    if (text[i] === '(') depth++
                    else if (text[i] === ')') depth--
                    i++
                }
                if (depth === 0) {
                    const content = text.substring(start, i)
                    result.push('<span class="text-parentheses">' + content + '</span>')
                } else {
                    result.push(text[start])
                    i = start + 1
                }
            } else {
                result.push(text[i])
                i++
            }
        }
        return result.join('')
    }
    
    $('.news-timeline .timeline-title').each(function() {
        let html = $(this).html()
        
        html = wrapParentheses(html)
        
        html = html.replace(/Top 5%/g, '<span class="award-top5">Top 5%</span>')
        html = html.replace(/Silver Medal/g, '<span class="award-silver">Silver Medal</span>')
        html = html.replace(/National First Prize/g, '<span class="award-gold">National First Prize</span>')
        
        $(this).html(html)
    })
    
    const loadGitHubRepos = () => {
        const username = 'HowieHsu0126'
        const reposContainer = $('#github-repos')
        const starsContainer = $('#github-stars')
        const totalStarsSpan = $('#total-stars')
        
        const fetchAllRepos = async (page = 1, allRepos = []) => {
            const perPage = 100
            const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=${perPage}&page=${page}&type=all`)
            
            if (!response.ok) {
                throw new Error('Failed to fetch repositories')
            }
            
            const repos = await response.json()
            allRepos = allRepos.concat(repos)
            
            if (repos.length === perPage) {
                return fetchAllRepos(page + 1, allRepos)
            }
            
            return allRepos
        }
        
        const loadRepos = async () => {
            const allRepos = await fetchAllRepos()
            
            allRepos.sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0))
            
            const topRepos = allRepos.slice(0, 6)
            let totalStars = 0
            
            allRepos.forEach(repo => {
                totalStars += repo.stargazers_count || 0
            })
            
            let html = ''
            topRepos.forEach(repo => {
                const desc = repo.description || 'No description'
                html += `<li><a target="_blank" href="${repo.html_url}">${repo.name}</a> - ${desc}</li>`
            })
            
            reposContainer.html(html)
            
            if (totalStars > 0) {
                totalStarsSpan.text(totalStars)
                starsContainer.show()
            }
        }
        
        loadRepos().catch(() => {
            reposContainer.html('<li class="text-muted">Unable to load repositories</li>')
        })
    }
    
    loadGitHubRepos()
})
