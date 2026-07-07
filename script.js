document.addEventListener('DOMContentLoaded', function() {
  const sectionLinks = Array.from(document.querySelectorAll('.section-rail a'));
  const sections = Array.from(document.querySelectorAll('[data-section]'));

  const pipelineData = {
    collect: {
      title: '01 / Collect images',
      text: 'Images are gathered from online sources and archives. Before AI appears intelligent, it depends on a massive visual supply chain: photographs, screenshots, portraits, and bodies turned into data.',
      note: 'Crawford and Paglen begin by asking viewers to inspect the dataset itself, not only the finished model.',
      score: 22,
      step: 0
    },
    label: {
      title: '02 / Label images',
      text: 'Images become useful to supervised learning only after they are named. The label is not a passive description; it is an instruction about what the machine should learn to see.',
      note: 'The ImageNet interface reveals the human labor and judgment hidden behind automated recognition.',
      score: 38,
      step: 1
    },
    taxonomy: {
      title: '03 / Inherit taxonomy',
      text: 'Labels are organized inside a taxonomy. ImageNet inherited categories from WordNet, which means old language structures and social assumptions enter machine vision as infrastructure.',
      note: 'This is why the project treats a dataset as a historical and political object.',
      score: 64,
      step: 2
    },
    model: {
      title: '04 / Train model',
      text: 'The model learns statistical patterns from the labeled dataset. Its output can look neutral because it arrives as a prediction, but the prediction is shaped by the dataset architecture.',
      note: 'The critique moves upstream: harm is not only in the model output, but in the categories that made the output possible.',
      score: 82,
      step: 3
    },
    critique: {
      title: '05 / Public critique',
      text: 'Excavating AI makes the system visible to artists, designers, technologists, and public audiences. It asks who gets classified, who defines the classes, and who absorbs the harm.',
      note: 'The project transforms technical infrastructure into public evidence.',
      score: 94,
      step: 4
    }
  };

  const lensData = {
    interface: {
      title: 'Interface as labor site',
      src: 'assets/original/imagenet-interface-2.jpg',
      alt: 'ImageNet interface shown as evidence in Excavating AI.',
      caption: 'The labeling interface makes visible the human work behind machine vision.'
    },
    taxonomy: {
      title: 'Taxonomy as worldview',
      src: 'assets/original/imagenet-taxonomy.png',
      alt: 'ImageNet taxonomy screenshot showing person categories and hierarchy.',
      caption: 'The taxonomy shows how categories become an operating system for recognition.'
    },
    dataset: {
      title: 'Dataset as population',
      src: 'assets/original/msceleb.jpg',
      alt: 'MS-Celeb dataset image montage made of many face thumbnails.',
      caption: 'The face montage shows people converted into a visual resource for machine learning.'
    },
    history: {
      title: 'History as counter-image',
      src: 'assets/original/i-am-a-man.jpg',
      alt: 'Memphis sanitation workers holding I AM A MAN protest signs in 1968.',
      caption: 'The historical protest image reframes classification as a political struggle over personhood.'
    }
  };

  const ontologyData = {
    material: {
      title: 'Material layer',
      text: "Photographs, scraped web images, historical archives, face datasets, screenshots, and labeled image examples become the project's basic matter. The argument begins by refusing to treat images as neutral raw material."
    },
    classification: {
      title: 'Classification layer',
      text: 'Taxonomies, WordNet synsets, ImageNet classes, person categories, confidence scores, and bounding boxes define what can be recognized. The classification system is an ontology before it is a model.'
    },
    labor: {
      title: 'Labor layer',
      text: 'Dataset builders, Amazon Mechanical Turk workers, researchers, curators, and image subjects all participate in the system, but they do not have equal visibility or power.'
    },
    technical: {
      title: 'Technical layer',
      text: 'Training sets, supervised learning, computer-vision benchmarks, face detectors, Caffe models, and classification interfaces turn social categories into computational operations.'
    },
    institutional: {
      title: 'Institutional layer',
      text: 'AI research labs, universities, museums, technology companies, online platforms, and media outlets shape how datasets are produced, displayed, validated, and challenged.'
    },
    political: {
      title: 'Political layer',
      text: 'Bias, race, gender, labor, consent, surveillance, moral judgment, social sorting, and representational harm are not side effects. They are part of what the project excavates.'
    }
  };

  const classifierLabels = [
    {
      label: 'person / category uncertain',
      confidence: 42,
      message: 'The system cannot hold context, but still produces a category. Crawford and Paglen show how uncertainty can be hidden behind interface confidence.'
    },
    {
      label: 'worker',
      confidence: 67,
      message: 'The label appears descriptive, but it reduces a person to a social role. The project asks who benefits when identity becomes a sortable tag.'
    },
    {
      label: 'spectator',
      confidence: 73,
      message: 'A whole person is compressed into one readable output. ImageNet Roulette exposed how harmful this compression becomes when categories carry social judgment.'
    },
    {
      label: 'consumer',
      confidence: 81,
      message: 'The model returns a clean answer because the taxonomy already decided what kinds of people exist inside the system.'
    },
    {
      label: 'unknown subject',
      confidence: 58,
      message: 'The interface turns ambiguity into administrative output. This is the violence of classification that the precedent makes visible.'
    }
  ];

  const plateData = {
    skulls: {
      status: 'PL-01 active / archive strip',
      title: 'The skull banner reads like a typological elevation.',
      text: 'The pan motion turns the banner into an architectural strip drawing: a row of specimens that points to older histories of measuring, comparing, and classifying bodies.'
    },
    taxonomy: {
      status: 'PL-02 active / taxonomic section',
      title: 'The taxonomy behaves like a structural section.',
      text: 'The section line cuts into the hierarchy to show that ImageNet is not only a pile of images. It is a spatial order of categories that determines what the model can recognize.'
    },
    measurement: {
      status: 'PL-03 active / measurement elevation',
      title: 'The face becomes a measured elevation.',
      text: 'The measurement overlay foregrounds how facial datasets translate bodies into distances, landmarks, and calculable features. The image matters because it shows personhood becoming geometry.'
    },
    dataset: {
      status: 'PL-04 active / population grid',
      title: 'The montage becomes a plan of population.',
      text: 'The zoom windows move from the crowd to selected cells, making the argument visible: individual faces are absorbed into a dataset grid and become training material.'
    },
    counterimage: {
      status: 'PL-05 active / counter-image',
      title: 'The protest image pushes back against the label.',
      text: 'The upward motion brings the signs forward. This image matters because it opposes administrative classification with a political claim to personhood: I AM A MAN.'
    }
  };

  function setActiveSection(id) {
    sectionLinks.forEach(function(link) {
      const isActive = link.getAttribute('href') === '#' + id;
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
      rootMargin: '-34% 0px -54% 0px',
      threshold: 0
    });

    sections.forEach(function(section) {
      observer.observe(section);
    });
  }

  const pipelineButtons = Array.from(document.querySelectorAll('.pipeline-button'));
  const pipelineTitle = document.getElementById('pipelineTitle');
  const pipelineText = document.getElementById('pipelineText');
  const pipelineNote = document.getElementById('pipelineNote');
  const neutralityBar = document.getElementById('neutralityBar');
  const trackNodes = Array.from(document.querySelectorAll('.track-node'));

  pipelineButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const key = button.dataset.stage;
      const data = pipelineData[key];

      pipelineButtons.forEach(function(item) {
        item.classList.toggle('active', item === button);
      });

      trackNodes.forEach(function(node, index) {
        node.classList.toggle('active', index <= data.step);
      });

      pipelineTitle.textContent = data.title;
      pipelineText.textContent = data.text;
      pipelineNote.textContent = data.note;
      neutralityBar.style.width = data.score + '%';
    });
  });

  const lensButtons = Array.from(document.querySelectorAll('.lens-button'));
  const lensTitle = document.getElementById('lensTitle');
  const lensImage = document.getElementById('lensImage');
  const lensCaption = document.getElementById('lensCaption');

  lensButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const key = button.dataset.lens;
      const data = lensData[key];

      lensButtons.forEach(function(item) {
        item.classList.toggle('active', item === button);
      });

      lensTitle.textContent = data.title;
      lensImage.src = data.src;
      lensImage.alt = data.alt;
      lensCaption.textContent = data.caption;
    });
  });

  const ontologyCards = Array.from(document.querySelectorAll('.ontology-card'));
  const ontologyTitle = document.getElementById('ontologyTitle');
  const ontologyText = document.getElementById('ontologyText');

  ontologyCards.forEach(function(card) {
    card.addEventListener('click', function() {
      const key = card.dataset.ontology;
      const data = ontologyData[key];

      ontologyCards.forEach(function(item) {
        item.classList.toggle('active', item === card);
      });

      ontologyTitle.textContent = data.title;
      ontologyText.textContent = data.text;
    });
  });

  const analysisPlates = Array.from(document.querySelectorAll('.analysis-plate'));
  const plateStatus = document.getElementById('plateStatus');
  const plateTitle = document.getElementById('plateTitle');
  const plateText = document.getElementById('plateText');

  function activatePlate(plate) {
    const key = plate.dataset.plate;
    const data = plateData[key];
    const shouldActivate = !plate.classList.contains('active');

    analysisPlates.forEach(function(item) {
      item.classList.remove('active');
      item.setAttribute('aria-pressed', 'false');
    });

    if (shouldActivate && data) {
      plate.classList.add('active');
      plate.setAttribute('aria-pressed', 'true');
      plateStatus.textContent = data.status;
      plateTitle.textContent = data.title;
      plateText.textContent = data.text;
    } else {
      plateStatus.textContent = 'Plate idle';
      plateTitle.textContent = 'Click an image plate to activate its architectural reading.';
      plateText.textContent = 'The image will move like a drawing layer: panning, sectioning, measuring, or zooming to explain the concept it carries in the precedent study.';
    }
  }

  analysisPlates.forEach(function(plate) {
    plate.addEventListener('click', function() {
      activatePlate(plate);
    });

    plate.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activatePlate(plate);
      }
    });
  });

  const demoButton = document.getElementById('demoButton');
  const demoLabel = document.getElementById('demoLabel');
  const messageArea = document.getElementById('messageDisplay');
  const confidenceFill = document.getElementById('confidenceFill');
  const demoStatus = document.querySelector('.demo-status');

  if (demoButton && demoLabel && messageArea && confidenceFill && demoStatus) {
    demoButton.addEventListener('click', function() {
      const result = classifierLabels[Math.floor(Math.random() * classifierLabels.length)];

      demoStatus.textContent = 'Classification complete';
      demoLabel.textContent = result.label;
      confidenceFill.style.width = result.confidence + '%';
      messageArea.textContent = result.message;

      demoButton.querySelector('span').textContent = 'RERUN';
    });
  }
});
