---
title:          "NeuronCtrl: Geometry-Aware Safe Closed-Loop Generative Control for Neuronal Microenvironment Dynamics"
date:           2026-05-11 00:00:00 +0800
selected:       true
pub:            International Conference on Machine Learning (ICML)
pub_last:       ' <span class="badge badge-pill badge-custom badge-success">Spotlight</span>'
pub_date:       "2026"
abstract: >-
  We introduce NEURONCTRL, a modular operator-level framework for safe, closed-loop generative control of neuronal microenvironment dynamics. Given sparse measurements on a morphology graph and a short observation–action history, we synthesize real-time stimulation to suppress pathological dynamics while satisfying hard constraints on actuator signals and field states. The framework consists of a history-conditioned observer that infers the latent field, a morphology-aware neural operator that predicts one-step dynamics, and a flow-matching conditional flow that proposes actions conditioned on user preferences. Safety is enforced via complementary barrier-based mechanisms at both the action and field levels, ensuring constraint satisfaction with minimal intervention. When latency is critical, the multi-step generator is distilled into a single-step policy while retaining the same safety filter. Experiments across three high-fidelity 3D neuromodulation benchmarks demonstrate superior trade-offs among cost, safety, and latency.
cover:          assets/images/empty_300x200.png
authors:
  - Haowei Xu
  - Yixin Chen
  - Wanyi Fu
  - Hongbin Han
  - Zhaoheng Xie
---
