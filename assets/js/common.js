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
    
    $('.news-timeline .timeline-title').each(function() {
        let html = $(this).html()
        
        html = html.replace(/\(([^)]+)\)/g, '<span class="text-parentheses">($1)</span>')
        
        html = html.replace(/Top 5%/g, '<span class="award-top5">Top 5%</span>')
        html = html.replace(/Silver Medal/g, '<span class="award-silver">Silver Medal</span>')
        html = html.replace(/National First Prize/g, '<span class="award-gold">National First Prize</span>')
        
        $(this).html(html)
    })
})
