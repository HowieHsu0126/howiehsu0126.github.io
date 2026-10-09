---
title:          "Prefix-Conditioned Diffusion for Early Rumor Detection Under Sparse and Incomplete Social Cascades"
date:           2026-10-10 00:00:00 +0800
selected:       false
pub:            ACM Transactions on Intelligent Systems and Technology (TIST)
pub_last:       ' <span class="badge badge-pill badge-custom badge-secondary">Journal</span>'
pub_date:       "2026"
abstract: >-
  Early rumor detection is hardest exactly when intervention is most valuable: the observed cascade is still sparse, yet the decision cannot wait for a mature propagation trace. A short prefix can admit several structurally different continuations, while standard detectors compress that prefix into one representation and one point prediction. We introduce RumorDiffusion, a class-conditioned topology diffusion framework that makes this missing-state ambiguity available to the decision layer. Conditioned on the same observed prefix and fixed semantic features, the model generates a potential representation for each veracity hypothesis. A Transformer arbiter compares these class potentials, and repeated reverse trajectories provide a dispersion signal for validation-calibrated prediction or deferral. Our analysis decomposes the resulting decision error into class-potential approximation, finite-trajectory sampling, and reject cost, linking each term to an observable diagnostic. Experiments on Twitter15, Twitter16, Weibo, and PHEME are organized around five research questions covering point discrimination, evidence accumulation, mechanism attribution, selective computation, and source-only transfer. Dataset-specialized models set the point-prediction frontier; RumorDiffusion exposes additional calibration, stability, coverage, and latency behavior through its class-potential interface. The reported sampling sweep selects a single reverse trajectory as the strongest quality–latency operating point, while the source-only study places RumorDiffusion in the lower-ECE region for both evaluated transfer pairs. These results establish structured continuation modeling as a practical decision interface for determining when an incomplete cascade contains sufficient evidence for action.
cover:          assets/images/empty_300x200.png
authors:
  - Haowei Xu
  - Chao Gao†
  - Xianghua Li
  - Zhen Wang
---
