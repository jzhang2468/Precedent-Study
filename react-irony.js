(function() {
  const rootElement = document.getElementById('react-irony-root');

  if (!rootElement || !window.React || !window.ReactDOM) {
    return;
  }

  const h = React.createElement;
  const { useEffect, useMemo, useState } = React;

  const labels = [
    {
      id: 'visual',
      label: 'Over-Interpreted Visual Evidence Subject',
      reason: 'You clicked visual evidence more than once, so the system pretends that looking can be converted into an identity.'
    },
    {
      id: 'pipeline',
      label: 'Pipeline-Compliant Data Subject',
      reason: 'You inspected several system stages, so the system falsely reads curiosity as a willingness to be processed.'
    },
    {
      id: 'map',
      label: 'Relational-Map Dependent Suspect',
      reason: 'You clicked relation-map nodes, so the system mistakes an attempt to understand power relations for a suspicious tendency.'
    },
    {
      id: 'method',
      label: 'Methodology-Obsessed Observer',
      reason: 'You spent attention on methods and critique, so the system compresses a reading pattern into a personality label.'
    },
    {
      id: 'silent',
      label: 'Silent Passive Browser',
      reason: 'You scrolled far but clicked less, so the system misreads silence as passivity.'
    },
    {
      id: 'active',
      label: 'Highly Classifiable Interactive Individual',
      reason: 'You clicked often, so the system claims it has enough evidence to define you.'
    },
    {
      id: 'forced',
      label: 'Insufficient Evidence, Still Classified',
      reason: 'Even with very little evidence, the system still produces a label. That is precisely the problem.'
    }
  ];

  function getScrollPercent() {
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    return Math.round((window.scrollY / max) * 100);
  }

  function chooseLabel(trace) {
    if (trace.plateClicks >= 2) return labels[0];
    if (trace.pipelineClicks >= 3) return labels[1];
    if (trace.mapClicks >= 2) return labels[2];
    if (trace.methodClicks >= 2 || trace.lastSection === 'part-3') return labels[3];
    if (trace.maxScroll > 72 && trace.clicks <= 2) return labels[4];
    if (trace.clicks >= 8) return labels[5];
    return labels[6];
  }

  function currentSectionId() {
    const sections = Array.from(document.querySelectorAll('[data-section]'));
    const midpoint = window.innerHeight * 0.5;
    let current = 'cover';

    sections.forEach(function(section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= midpoint && rect.bottom >= midpoint) {
        current = section.id;
      }
    });

    return current;
  }

  function TraceMeter(props) {
    const width = Math.min(100, Math.max(4, props.value));

    return h('div', { className: 'trace-meter' },
      h('span', null, props.label),
      h('i', null, h('b', { style: { width: width + '%' } })),
      h('strong', null, props.display)
    );
  }

  function TracePill(props) {
    return h('span', { className: 'trace-pill' }, props.children);
  }

  function MachineIrony() {
    const [trace, setTrace] = useState(function() {
      return {
        clicks: 0,
        pipelineClicks: 0,
        plateClicks: 0,
        mapClicks: 0,
        methodClicks: 0,
        sectionChanges: 0,
        maxScroll: getScrollPercent(),
        lastSection: currentSectionId(),
        seconds: 0
      };
    });
    const [revealed, setRevealed] = useState(false);

    useEffect(function() {
      const start = Date.now();
      let scrollFrame = null;
      let lastSection = currentSectionId();

      function updateTrace(patch) {
        setTrace(function(previous) {
          return Object.assign({}, previous, patch(previous));
        });
      }

      function onClick(event) {
        const rawTarget = event.target;
        const target = rawTarget && rawTarget.closest
          ? rawTarget
          : rawTarget && rawTarget.parentElement;

        updateTrace(function(previous) {
          return {
            clicks: previous.clicks + 1,
            pipelineClicks: previous.pipelineClicks + (target && target.closest('[data-stage]') ? 1 : 0),
            plateClicks: previous.plateClicks + (target && target.closest('.plate-card') ? 1 : 0),
            mapClicks: previous.mapClicks + (target && target.closest('.map-node') ? 1 : 0),
            methodClicks: previous.methodClicks + (target && target.closest('.method-card') ? 1 : 0)
          };
        });
      }

      function onScroll() {
        if (scrollFrame !== null) return;

        scrollFrame = window.requestAnimationFrame(function() {
          scrollFrame = null;
          const section = currentSectionId();
          const changed = section !== lastSection;
          lastSection = section;

          updateTrace(function(previous) {
            return {
              maxScroll: Math.max(previous.maxScroll, getScrollPercent()),
              lastSection: section,
              sectionChanges: previous.sectionChanges + (changed ? 1 : 0)
            };
          });
        });
      }

      function tick() {
        setTrace(function(previous) {
          return Object.assign({}, previous, {
            seconds: Math.floor((Date.now() - start) / 1000)
          });
        });
      }

      document.addEventListener('click', onClick, true);
      window.addEventListener('scroll', onScroll, { passive: true });
      const timer = window.setInterval(tick, 1000);

      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.42) {
            window.setTimeout(function() {
              setRevealed(true);
            }, 800);
          }
        });
      }, { threshold: [0.42, 0.66] });

      observer.observe(rootElement);
      onScroll();

      return function() {
        document.removeEventListener('click', onClick, true);
        window.removeEventListener('scroll', onScroll);
        window.clearInterval(timer);
        observer.disconnect();
        if (scrollFrame !== null) {
          window.cancelAnimationFrame(scrollFrame);
        }
      };
    }, []);

    useEffect(function() {
      if (!revealed) return undefined;

      document.body.classList.add('scramble-mode');
      const timer = window.setTimeout(function() {
        document.body.classList.remove('scramble-mode');
      }, 950);

      return function() {
        window.clearTimeout(timer);
        document.body.classList.remove('scramble-mode');
      };
    }, [revealed]);

    const judgment = useMemo(function() {
      return chooseLabel(trace);
    }, [trace]);

    const confidence = useMemo(function() {
      const raw = 26 + trace.clicks * 6 + trace.maxScroll * 0.42 + trace.sectionChanges * 4;
      return Math.min(97, Math.round(raw));
    }, [trace]);

    const sectionName = trace.lastSection || 'unknown';

    return h('section', { className: 'irony-console', 'aria-label': 'Machine label irony console' },
      h('div', { className: 'irony-copy' },
        h('p', { className: 'kicker' }, 'Behavioral Map / React Trace Console'),
        h('h3', null, 'A machine reads your behavior and pretends to know you.'),
        h('p', null, 'This component uses React to stage a small political practice inside the website: it converts thin local interaction traces into an absurd identity label, then exposes the violence of that conversion. The click and scroll values are measured in this browser session; the label is a deliberately false inference.'),
        h('div', { className: 'trace-pills', 'aria-label': 'Local trace summary' },
          h(TracePill, null, 'local only'),
          h(TracePill, null, trace.clicks + ' clicks'),
          h(TracePill, null, trace.maxScroll + '% scroll'),
          h(TracePill, null, 'section: ' + sectionName)
        )
      ),
      h('div', { className: 'irony-machine ' + (revealed ? 'is-revealed' : '') },
        h('span', { className: 'machine-status' }, revealed ? 'classification leaked' : 'collecting operation log'),
        h('div', { className: 'trace-bars' },
          h(TraceMeter, { label: 'click evidence', value: trace.clicks * 10, display: trace.clicks }),
          h(TraceMeter, { label: 'scroll depth', value: trace.maxScroll, display: trace.maxScroll + '%' }),
          h(TraceMeter, { label: 'false confidence', value: confidence, display: confidence + '%' })
        ),
        h('div', { className: 'machine-verdict', 'aria-live': 'polite' },
          revealed
            ? h(React.Fragment, null,
                h('p', { className: 'verdict-line' }, 'According to your operation log on this page, the machine has classified you as ',
                  h('strong', null, '[' + judgment.label + ']'),
                  '.'
                ),
                h('p', { className: 'verdict-question' }, 'But that is absurd, is it not?'),
                h('p', { className: 'verdict-reason' }, judgment.reason),
                h('p', { className: 'verdict-footnote' }, 'These traces exist only inside your local browser and are not uploaded. The satirical point is that such thin evidence can still be packaged as an objective classification.')
              )
            : h('p', null, 'The label is hidden until the site reaches the critique section. You can also force the absurd judgment now.')
        ),
        h('div', { className: 'irony-actions' },
          h('button', { type: 'button', onClick: function() { setRevealed(true); } }, 'REVEAL MACHINE LABEL'),
          h('button', { type: 'button', onClick: function() { setRevealed(false); } }, 'HIDE LABEL')
        )
      )
    );
  }

  ReactDOM.createRoot(rootElement).render(h(MachineIrony));
}());
