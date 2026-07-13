document.addEventListener('DOMContentLoaded', function() {
  const body = document.body;
  const partThreeSection = document.getElementById('part-3');
  const relationalMapSection = document.getElementById('relational-map');
  const methodBoard = partThreeSection ? partThreeSection.querySelector('.method-board') : null;

  if (partThreeSection && relationalMapSection) {
    relationalMapSection.classList.add('embedded-relational-map');
    relationalMapSection.classList.remove('section-panel');

    if (methodBoard && !partThreeSection.contains(relationalMapSection)) {
      partThreeSection.insertBefore(relationalMapSection, methodBoard);
    }
  }

  const sectionLinks = Array.from(document.querySelectorAll('.section-rail a, .top-nav a'));
  const sections = Array.from(document.querySelectorAll('[data-section]'));
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const pipelineData = {
    collect: {
      tag: 'DATA PROVENANCE',
      title: 'Images are gathered before the model exists.',
      text: 'The project begins with scraped images, image-search results, research datasets, face archives, and museum-scale collections. The first critical move is to treat data as something made, not found.',
      chip: 'COLLECT / unlabeled image mass',
      visibility: 38,
      politics: 72,
      visuals: [
        { src: 'assets/reference/face-fragment-vertical.jpg', alt: '' },
        { src: 'assets/original/msceleb.jpg', alt: '' },
        { src: 'assets/original/top-banner-skulls.png', alt: '' }
      ]
    },
    label: {
      tag: 'ANNOTATION LABOR',
      title: 'The label turns an image into a command.',
      text: 'Human annotators, dataset builders, and inherited language systems decide what a picture should mean for the machine. The label becomes instruction, not description.',
      chip: 'LABEL / person becomes class',
      visibility: 52,
      politics: 82,
      visuals: [
        { src: 'assets/original/imagenet-interface-2.jpg', alt: '' },
        { src: 'assets/reference/ascii-faces.jpg', alt: '' },
        { src: 'assets/reference/face-fragment-vertical.jpg', alt: '' }
      ]
    },
    taxonomy: {
      tag: 'WORDNET TO IMAGENET',
      title: 'The taxonomy defines what can exist.',
      text: 'ImageNet inherits a nested language hierarchy from WordNet. This turns old linguistic categories, including harmful person categories, into machine-vision structure.',
      chip: 'TAXONOMY / hierarchy hardens',
      visibility: 63,
      politics: 90,
      visuals: [
        { src: 'assets/original/imagenet-taxonomy.png', alt: '' },
        { src: 'assets/reference/scan-ear-blue.jpg', alt: '' },
        { src: 'assets/original/top-banner-skulls.png', alt: '' }
      ]
    },
    train: {
      tag: 'SOFTWARE MODEL',
      title: 'The model learns from the worldview of the dataset.',
      text: 'The ImageNet Roulette experiment used Caffe and face detection to classify uploaded images through ImageNet person labels. The software made the dataset speak in public.',
      chip: 'TRAIN / Caffe model + face detector',
      visibility: 70,
      politics: 88,
      visuals: [
        { src: 'assets/reference/facial-landmarks.jpg', alt: '' },
        { src: 'assets/original/diff-face.png', alt: '' },
        { src: 'assets/reference/ascii-faces.jpg', alt: '' }
      ]
    },
    classify: {
      tag: 'ADMINISTRATIVE OUTPUT',
      title: 'A complex person becomes one output label.',
      text: 'The interface returns a bounding box, a category, and a confidence-like performance of certainty. That reduction is the rhetorical wound at the center of the project.',
      chip: 'CLASSIFY / label as judgment',
      visibility: 84,
      politics: 96,
      visuals: [
        { src: 'assets/reference/ascii-faces.jpg', alt: '' },
        { src: 'assets/reference/facial-landmarks.jpg', alt: '' },
        { src: 'assets/reference/verify-human.jpg', alt: '' }
      ]
    },
    critique: {
      tag: 'PUBLIC EVIDENCE',
      title: 'The project turns infrastructure into a public argument.',
      text: 'Excavating AI reframes training sets as cultural and political artifacts. Its critique is not just "bad labels exist"; it asks who has the power to define categories at scale.',
      chip: 'CRITIQUE / look back at the system',
      visibility: 96,
      politics: 100,
      visuals: [
        { src: 'assets/original/i-am-a-man.jpg', alt: '' },
        { src: 'assets/reference/terminal-passport.jpg', alt: '' },
        { src: 'assets/original/top-banner-skulls.png', alt: '' }
      ]
    }
  };

  const layerData = {
    ontology: {
      number: '01',
      title: 'Ontological analysis',
      text: 'At the simplest level, the project asks what exists inside machine vision before a model ever appears to see. Its building blocks are images, labels, taxonomies, classes, annotators, interfaces, models, users, institutions, and the social meanings carried by every category.'
    },
    context: {
      number: '02',
      title: 'Historical and contextual analysis',
      text: 'The project appeared in 2019, after a decade in which ImageNet had become foundational to computer vision. Crawford and Paglen respond to the myth that machine vision is neutral progress by connecting contemporary datasets to older histories of classification, physiognomy, race science, labor platforms, and institutional power.'
    },
    visual: {
      number: '03',
      title: 'Visual and aesthetic representation',
      text: 'The visual language is forensic and archival: screenshots, grids, redactions, taxonomies, face montages, and historical counter-images. The project does not imagine AI as a futuristic abstraction. It shows the ordinary documents and interfaces through which AI learns to see.'
    }
  };

  const nodeData = {
    images: 'Images are not neutral inputs. They are scraped, selected, cropped, captioned, stored, and re-used across technical and cultural contexts.',
    labels: 'Labels are operational decisions. Once attached to an image, they tell the model what kind of thing the image should become.',
    taxonomy: 'Taxonomy is spatial structure. It creates branches, neighborhoods, exclusions, and routes through which a model can recognize the world.',
    labor: 'Annotation labor sits behind the interface. The project makes visible the clickworkers, dataset builders, researchers, and subjects normally hidden by automation.',
    models: 'Models inherit the categories they are trained on. Their outputs can look objective because the social assumptions have already been encoded upstream.',
    power: 'Power appears in the right to collect, name, classify, publish, hide, delete, and reuse images of people.'
  };

  const plateData = {
    interface: {
      src: 'assets/original/imagenet-interface-2.jpg',
      alt: 'ImageNet interface used by Amazon Turk workers to label pictures.',
      label: 'PL-01 / Interface as labor site',
      title: 'The interface reveals the human work behind machine vision.',
      text: 'The labeling screen turns AI into a workplace. It shows that machine recognition depends on people clicking, interpreting, and standardizing images before automation can claim authority.'
    },
    taxonomy: {
      src: 'assets/original/imagenet-taxonomy.png',
      alt: 'ImageNet taxonomy screenshot with person categories.',
      label: 'PL-02 / Taxonomy as architecture',
      title: 'The hierarchy becomes a built environment for recognition.',
      text: 'The screenshot reads like a section drawing: categories are nested, routed, and stabilized. The model can only see through the structure it inherits.'
    },
    measurement: {
      src: 'assets/original/diff-face.png',
      alt: 'IBM Diversity in Faces diagram with facial landmarks.',
      label: 'PL-03 / Face as measurement field',
      title: 'The body becomes geometry.',
      text: 'Facial landmarks convert a face into distances, points, symmetry, and calculable features. The image exposes the return of older measurement logics inside modern fairness language.'
    },
    dataset: {
      src: 'assets/original/msceleb.jpg',
      alt: 'MS-Celeb face dataset montage.',
      label: 'PL-04 / Population grid',
      title: 'Individuals are compressed into a training population.',
      text: 'The face montage makes scale visible. It shows how people become a resource for recognition systems, often without consent or meaningful context.'
    },
    counter: {
      src: 'assets/original/i-am-a-man.jpg',
      alt: 'Memphis sanitation workers holding I AM A MAN signs.',
      label: 'PL-05 / Counter-image',
      title: 'A political image refuses the administrative label.',
      text: 'The protest signs push back against classification. The image reframes recognition as a struggle over personhood, rights, and self-representation.'
    }
  };

  const methodData = {
    software: {
      tag: 'SOFTWARE APPROACH',
      title: 'The demo is a critical instrument.',
      text: 'ImageNet Roulette used a Caffe model trained on ImageNet person categories, plus face detection and bounding boxes. Its value is rhetorical: it stages the software pipeline so viewers can see the dataset acting through the model.'
    },
    data: {
      tag: 'DATA USES + PROVENANCE',
      title: 'The project follows images backward.',
      text: 'Rather than treating datasets as neutral material, the study asks where images came from, who labeled them, what categories were inherited, and what happens when collections disappear from public view after being used widely.'
    },
    theory: {
      tag: 'THEORETICAL METHODS',
      title: 'Dataset archaeology meets visual culture.',
      text: 'The method draws from media archaeology, STS, semiotics, critical race and gender theory, institutional critique, and art history. It reads technical artifacts as social documents.'
    },
    rhetoric: {
      tag: 'RHETORICAL ANALYSIS',
      title: 'The argument proceeds by reversal.',
      text: 'The reader begins with ordinary object recognition and ends inside harmful person categories. This shift turns a familiar AI story into a critique of classification, evidence, power, and responsibility.'
    },
    practice: {
      tag: 'WIDER PRACTICE',
      title: 'It extends both authors systems of looking.',
      text: 'For Crawford, this connects to mapping AI as labor, resource extraction, infrastructure, and power. For Paglen, it extends work on hidden surveillance systems, machine vision, and images made by or for technical regimes.'
    },
    appraisal: {
      tag: 'PERSONAL ASSESSMENT',
      title: 'The precedent is urgent, but ethically tense.',
      text: 'Its strength is that it gives designers a forensic method for inspecting data before deployment. Its weakness is that exposing harmful labels and sensitive datasets can risk recirculating the harms it seeks to criticize.'
    }
  };

  const mapData = {
    subjects: {
      type: 'ACTOR',
      title: 'Image subjects',
      body: 'People appear first as photographed subjects, then as dataset material, then as labels. The map begins here because the project asks what happens when personhood is converted into training data.',
      connections: 'Web images, consent gap, design critique',
      issue: 'Representation without meaningful control over collection, labeling, or reuse.'
    },
    'web-images': {
      type: 'RESOURCE',
      title: 'Web images',
      body: 'Images scraped or gathered from online environments become raw material for computer vision. Their ordinary circulation disguises the shift into training infrastructure.',
      connections: 'Image subjects, face datasets, training set',
      issue: 'Public visibility is treated as permission for extraction.'
    },
    'face-datasets': {
      type: 'RESOURCE',
      title: 'Face datasets',
      body: 'JAFFE, UTKFace, MS-Celeb, IBM Diversity in Faces, and related archives show how faces become measurable populations for AI research.',
      connections: 'Web images, training set, consent gap',
      issue: 'Dataset provenance is uneven, contested, and often hard for subjects to trace.'
    },
    wordnet: {
      type: 'LANGUAGE',
      title: 'WordNet',
      body: 'WordNet supplies linguistic hierarchy. ImageNet inherits that ordering, so language categories become visual categories and then model infrastructure.',
      connections: 'ImageNet taxonomy, training set',
      issue: 'A dictionary structure becomes a worldview for machine perception.'
    },
    consent: {
      type: 'ISSUE',
      title: 'Consent gap',
      body: 'The project repeatedly asks who had agency in becoming training data. Many people appear as images but not as decision-makers.',
      connections: 'Image subjects, face datasets, design critique',
      issue: 'The subject of recognition is rarely the author of the category.'
    },
    builders: {
      type: 'ACTOR',
      title: 'Dataset builders',
      body: 'Researchers and institutions assemble datasets, select sources, adopt labels, publish benchmarks, and define what counts as progress.',
      connections: 'ImageNet taxonomy, training set',
      issue: 'Technical assembly also produces social order.'
    },
    labelers: {
      type: 'LABOR',
      title: 'MTurk labelers',
      body: 'Clickworkers and annotators translate images into machine-readable labels. Their labor makes automation possible while often remaining visually absent.',
      connections: 'ImageNet taxonomy, training set',
      issue: 'Human judgment is hidden inside the appearance of automated recognition.'
    },
    taxonomy: {
      type: 'PROCESS',
      title: 'ImageNet taxonomy',
      body: 'Taxonomy is the central architecture of the precedent: it organizes images into classes, including person categories that carry social judgment.',
      connections: 'WordNet, dataset builders, MTurk labelers, training set',
      issue: 'Classification defines what kinds of people the system can imagine.'
    },
    'training-set': {
      type: 'INFRASTRUCTURE',
      title: 'Training set',
      body: 'The training set is where images, labels, taxonomies, labor, and institutional authority converge before the model is trained.',
      connections: 'Face datasets, ImageNet taxonomy, ImageNet Roulette',
      issue: 'Bias is not only output error. It is built into the upstream architecture.'
    },
    roulette: {
      type: 'INTERFACE',
      title: 'ImageNet Roulette',
      body: 'The interface makes the dataset speak publicly by returning person labels for uploaded faces. It turns classification into an immediate social encounter.',
      connections: 'Training set, public audiences',
      issue: 'A clean UI can expose an unclean taxonomy.'
    },
    authors: {
      type: 'AUTHOR',
      title: 'Crawford + Paglen',
      body: 'The authors act as investigators, curators, and rhetoricians. They move between technical infrastructure, visual culture, institutional critique, and public pedagogy.',
      connections: 'Excavating AI, Training Humans, public audiences',
      issue: 'The project turns hidden infrastructure into visible evidence.'
    },
    essay: {
      type: 'OUTPUT',
      title: 'Excavating AI',
      body: 'The digital essay organizes screenshots, dataset examples, histories, and argument into a public archaeology of machine-learning training sets.',
      connections: 'Crawford + Paglen, public audiences, design critique',
      issue: 'The essay shifts critique upstream from model output to dataset construction.'
    },
    exhibition: {
      type: 'EXHIBITION',
      title: 'Training Humans',
      body: 'The exhibition translates the argument into an image-history and public-culture format, situating AI datasets within longer visual regimes.',
      connections: 'Crawford + Paglen, public audiences',
      issue: 'Displaying training images can critique power while also raising ethical questions of re-display.'
    },
    publics: {
      type: 'PUBLIC',
      title: 'Public audiences',
      body: 'Artists, designers, researchers, journalists, students, and internet users become part of the feedback loop when they encounter the labels and share reactions.',
      connections: 'ImageNet Roulette, Excavating AI, Training Humans, institutional response',
      issue: 'Public reaction helps transform a dataset problem into an institutional problem.'
    },
    response: {
      type: 'FEEDBACK',
      title: 'Institutional response',
      body: 'After the project circulated, datasets and person categories became more publicly scrutinized. Some materials disappeared, which created a second problem: how to audit what is removed.',
      connections: 'Public audiences, dataset disappearance, design critique',
      issue: 'Removal can reduce harm but also erase evidence of how systems were built.'
    },
    disappearance: {
      type: 'ISSUE',
      title: 'Dataset disappearance',
      body: 'The disappearance of categories or datasets is itself relational: it connects critique, institutional risk, accountability, and the fragility of public evidence.',
      connections: 'Institutional response, design critique',
      issue: 'What vanishes from public view may still have shaped AI systems.'
    },
    'design-critique': {
      type: 'TAKEAWAY',
      title: 'Design critique',
      body: 'The design lesson is to map relations before building interfaces: subjects, data sources, labels, institutions, outputs, harms, and feedback all belong in the system diagram.',
      connections: 'Consent gap, Excavating AI, institutional response',
      issue: 'A responsible AI interface should show provenance and power, not only prediction.'
    }
  };

  function setActiveSection(id) {
    sectionLinks.forEach(function(link) {
      const href = link.getAttribute('href');
      const isActive = href === '#' + id || (id === 'cover' && href === '#cover');
      link.classList.toggle('active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      rootMargin: '-35% 0px -52% 0px',
      threshold: 0
    });

    sections.forEach(function(section) {
      observer.observe(section);
    });
  }

  if (!reduceMotion) {
    body.classList.add('scroll-fade-ready');

    let fadeFrame = null;

    function clamp(value, min, max) {
      return Math.min(max, Math.max(min, value));
    }

    function smoothstep(edge0, edge1, value) {
      const x = clamp((value - edge0) / (edge1 - edge0), 0, 1);
      return x * x * (3 - 2 * x);
    }

    function updateScrollFade() {
      fadeFrame = null;
      const viewportHeight = window.innerHeight || 1;

      sections.forEach(function(section) {
        const rect = section.getBoundingClientRect();
        const progress = clamp((viewportHeight - rect.top) / (viewportHeight + rect.height), 0, 1);
        const fadeIn = smoothstep(0.08, 0.28, progress);
        const fadeOut = 1 - smoothstep(0.72, 0.94, progress);
        const alpha = clamp(Math.min(fadeIn, fadeOut), 0, 1);
        const direction = progress < 0.5 ? 1 : -1;
        const drift = direction * (1 - alpha) * 22;
        const scale = 0.992 + alpha * 0.008;
        const edgeFade = clamp(1 - alpha, 0, 1);
        const scanY = (progress - 0.5) * 120;

        section.style.setProperty('--section-alpha', alpha.toFixed(3));
        section.style.setProperty('--section-y', drift.toFixed(1) + 'px');
        section.style.setProperty('--section-scale', scale.toFixed(4));
        section.style.setProperty('--scan-alpha', (edgeFade * 0.6).toFixed(3));
        section.style.setProperty('--scan-y', scanY.toFixed(1) + 'px');
      });
    }

    function requestScrollFade() {
      if (fadeFrame === null) {
        fadeFrame = window.requestAnimationFrame(updateScrollFade);
      }
    }

    window.addEventListener('scroll', requestScrollFade, { passive: true });
    window.addEventListener('resize', requestScrollFade);
    updateScrollFade();
  }

  const scrambleToggle = document.getElementById('scrambleToggle');
  if (scrambleToggle) {
    scrambleToggle.addEventListener('click', function() {
      body.classList.toggle('scramble-mode');
      scrambleToggle.textContent = body.classList.contains('scramble-mode') ? 'STABILIZE' : 'SCRAMBLE';
    });
  }

  const tiltTargets = Array.from(document.querySelectorAll('[data-tilt]'));
  window.addEventListener('pointermove', function(event) {
    const x = event.clientX - window.innerWidth / 2;
    const y = event.clientY - window.innerHeight / 2;
    tiltTargets.forEach(function(target) {
      target.style.setProperty('--mx', x.toFixed(1) + 'px');
      target.style.setProperty('--my', y.toFixed(1) + 'px');
    });
  });

  const pipelineButtons = Array.from(document.querySelectorAll('.pipeline-button'));
  const pipelineTag = document.getElementById('pipelineTag');
  const pipelineTitle = document.getElementById('pipelineTitle');
  const pipelineText = document.getElementById('pipelineText');
  const systemChip = document.getElementById('systemChip');
  const visibilityMeter = document.getElementById('visibilityMeter');
  const politicsMeter = document.getElementById('politicsMeter');
  const cgStage = document.querySelector('.cg-stage');
  const faceLayers = Array.from(document.querySelectorAll('.face-layer'));
  const stageClasses = Object.keys(pipelineData).map(function(key) {
    return 'stage-' + key;
  });

  function updatePipelineVisual(stageKey, data) {
    if (!cgStage || !data.visuals) {
      return;
    }

    cgStage.classList.add('is-switching');

    window.setTimeout(function() {
      faceLayers.forEach(function(layer, index) {
        const visual = data.visuals[index];
        if (visual) {
          layer.src = visual.src;
          layer.alt = visual.alt;
        }
      });

      cgStage.classList.remove(...stageClasses);
      cgStage.classList.add('stage-' + stageKey);
      cgStage.classList.remove('is-switching');
    }, 130);
  }

  pipelineButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const stageKey = button.dataset.stage;
      const data = pipelineData[stageKey];
      pipelineButtons.forEach(function(item) {
        item.classList.toggle('active', item === button);
      });
      pipelineTag.textContent = data.tag;
      pipelineTitle.textContent = data.title;
      pipelineText.textContent = data.text;
      systemChip.textContent = data.chip;
      visibilityMeter.style.width = data.visibility + '%';
      politicsMeter.style.width = data.politics + '%';
      updatePipelineVisual(stageKey, data);
    });
  });

  const layerTabs = Array.from(document.querySelectorAll('.layer-tab'));
  const layerNumber = document.getElementById('layerNumber');
  const layerTitle = document.getElementById('layerTitle');
  const layerText = document.getElementById('layerText');

  layerTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      const data = layerData[tab.dataset.layer];
      layerTabs.forEach(function(item) {
        item.classList.toggle('active', item === tab);
      });
      layerNumber.textContent = data.number;
      layerTitle.textContent = data.title;
      layerText.textContent = data.text;
    });
  });

  const orbitNodes = Array.from(document.querySelectorAll('.orbit-node'));
  const nodeReadout = document.getElementById('nodeReadout');

  orbitNodes.forEach(function(node) {
    node.addEventListener('click', function() {
      orbitNodes.forEach(function(item) {
        item.classList.toggle('active', item === node);
      });
      nodeReadout.textContent = nodeData[node.dataset.node];
    });
  });

  const plateButtons = Array.from(document.querySelectorAll('.plate-card'));
  const plateView = document.getElementById('plateView');
  const plateImage = document.getElementById('plateImage');
  const plateLabel = document.getElementById('plateLabel');
  const plateTitle = document.getElementById('plateTitle');
  const plateText = document.getElementById('plateText');

  plateButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const data = plateData[button.dataset.plate];
      plateButtons.forEach(function(item) {
        item.classList.toggle('active', item === button);
      });
      plateView.classList.remove('active-motion');
      window.requestAnimationFrame(function() {
        plateImage.src = data.src;
        plateImage.alt = data.alt;
        plateLabel.textContent = data.label;
        plateTitle.textContent = data.title;
        plateText.textContent = data.text;
        window.requestAnimationFrame(function() {
          plateView.classList.add('active-motion');
        });
      });
    });
  });

  const mapNodes = Array.from(document.querySelectorAll('.map-node'));
  const mapRoutes = Array.from(document.querySelectorAll('.map-paths path'));
  const mapType = document.getElementById('mapType');
  const mapTitleText = document.getElementById('mapTitleText');
  const mapBody = document.getElementById('mapBody');
  const mapConnections = document.getElementById('mapConnections');
  const mapIssue = document.getElementById('mapIssue');

  function setActiveMapNode(key) {
    const data = mapData[key];
    if (!data) {
      return;
    }

    mapNodes.forEach(function(node) {
      node.classList.toggle('active', node.dataset.map === key);
    });

    mapRoutes.forEach(function(route) {
      const routeNodes = (route.dataset.path || '').split(' ');
      route.classList.toggle('active', routeNodes.includes(key));
    });

    if (mapType && mapTitleText && mapBody && mapConnections && mapIssue) {
      mapType.textContent = data.type;
      mapTitleText.textContent = data.title;
      mapBody.textContent = data.body;
      mapConnections.textContent = data.connections;
      mapIssue.textContent = data.issue;
    }
  }

  mapNodes.forEach(function(node) {
    node.addEventListener('click', function() {
      setActiveMapNode(node.dataset.map);
    });

    node.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setActiveMapNode(node.dataset.map);
      }
    });
  });

  setActiveMapNode('subjects');

  const methodCards = Array.from(document.querySelectorAll('.method-card'));
  const methodTag = document.getElementById('methodTag');
  const methodTitle = document.getElementById('methodTitle');
  const methodText = document.getElementById('methodText');

  methodCards.forEach(function(card) {
    const button = card.querySelector('button');
    button.addEventListener('click', function() {
      const data = methodData[card.dataset.method];
      methodCards.forEach(function(item) {
        item.classList.toggle('active', item === card);
      });
      methodTag.textContent = data.tag;
      methodTitle.textContent = data.title;
      methodText.textContent = data.text;
    });
  });

  function initCanvas() {
    const canvas = document.getElementById('signalField');
    if (!canvas) {
      return;
    }
    const context = canvas.getContext('2d');
    const state = {
      width: 0,
      height: 0,
      particles: [],
      tick: 0
    };

    function resize() {
      const ratio = window.devicePixelRatio || 1;
      state.width = window.innerWidth;
      state.height = window.innerHeight;
      canvas.width = Math.floor(state.width * ratio);
      canvas.height = Math.floor(state.height * ratio);
      canvas.style.width = state.width + 'px';
      canvas.style.height = state.height + 'px';
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.min(90, Math.max(36, Math.floor(state.width / 18)));
      state.particles = Array.from({ length: count }, function(_, index) {
        return {
          x: Math.random() * state.width,
          y: Math.random() * state.height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          r: index % 7 === 0 ? 2.4 : 1.2 + Math.random() * 1.8
        };
      });
    }

    function draw() {
      state.tick += 1;
      context.clearRect(0, 0, state.width, state.height);
      context.fillStyle = 'rgba(6, 6, 6, 0.34)';
      context.strokeStyle = 'rgba(6, 6, 6, 0.14)';
      context.lineWidth = 1;

      state.particles.forEach(function(particle, index) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -10) particle.x = state.width + 10;
        if (particle.x > state.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = state.height + 10;
        if (particle.y > state.height + 10) particle.y = -10;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        context.fill();

        for (let j = index + 1; j < state.particles.length; j += 1) {
          const other = state.particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 118) {
            context.globalAlpha = 1 - distance / 118;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.stroke();
            context.globalAlpha = 1;
          }
        }
      });

      if (state.tick % 34 < 9) {
        const y = (state.tick * 17) % state.height;
        context.fillStyle = 'rgba(23, 200, 238, 0.22)';
        context.fillRect(0, y, state.width, 8);
        context.fillStyle = 'rgba(239, 42, 32, 0.18)';
        context.fillRect(state.width * 0.12, y + 13, state.width * 0.72, 5);
      }

      window.requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    draw();
  }

  initCanvas();
});
