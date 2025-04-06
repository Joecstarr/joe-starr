(() => {
  // ns-hugo-params:<stdin>
  var slides = { diagram: true, diagram_options: { theme: "dark" }, highlight_style: "dracula", reveal_options: { center: true, theme: "none", transition: "none" } };

  // <stdin>
  var enabledPlugins = [RevealMarkdown, RevealSearch, RevealNotes, RevealZoom];
  var isObject = function(o) {
    return o === Object(o) && !isArray(o) && typeof o !== "function";
  };
  var isArray = function(a) {
    return Array.isArray(a);
  };
  var toCamelCase = function(s) {
    return s.replace(/([-_][a-z])/gi, function(term) {
      return term.toUpperCase().replace("-", "").replace("_", "");
    });
  };
  var keysToCamelCase = function(o) {
    if (isObject(o)) {
      const n = {};
      Object.keys(o).forEach(function(k) {
        n[toCamelCase(k)] = keysToCamelCase(o[k]);
      });
      return n;
    } else if (isArray(o)) {
      return o.map(function(i) {
        return keysToCamelCase(i);
      });
    }
    return o;
  };
  var pluginOptions = {};
  if (typeof slides.reveal_options !== "undefined") {
    pluginOptions = slides.reveal_options;
  }
  pluginOptions = keysToCamelCase(pluginOptions);
  if (typeof pluginOptions.menu_enabled === "undefined") {
    pluginOptions.menu_enabled = true;
  }
  if (pluginOptions.menu_enabled) {
    enabledPlugins.push(RevealMenu);
  }
  pluginOptions["plugins"] = enabledPlugins;
  pluginOptions["backgroundTransition"] = "none";
  Reveal.initialize(pluginOptions).then(() => {
  });
  if (typeof slides.diagram === "undefined") {
    slides.diagram = false;
  }
  if (slides.diagram) {
    mermaidOptions = {};
    if (typeof slides.diagram_options !== "undefined") {
      mermaidOptions = slides.diagram_options;
    }
    mermaidOptions["startOnLoad"] = false;
    mermaidOptions["securityLevel"] = "loose";
    mermaidOptions["useMaxWidth"] = false;
    mermaid.initialize(mermaidOptions);
    let mermaidDivs = document.querySelectorAll(".mermaid:not(.mermaid-done)");
    mermaidDivs.forEach((diagram, i) => {
      diagram.setAttribute("id", `mermaid-${i}`);
    });
    let renderMermaidDiagrams = function renderMermaidDiagrams2(event) {
      let mermaidDivs2 = event.currentSlide.querySelectorAll(".mermaid:not(.mermaid-done)");
      let indices = Reveal.getIndices();
      let pageno = `${indices.h}-${indices.v}`;
      mermaidDivs2.forEach(function(mermaidDiv, i) {
        let graphDefinition = mermaidDiv.textContent;
        mermaid.render(`mermaid-${pageno}-${i}`, graphDefinition).then((obj) => {
          mermaidDiv.innerHTML = obj.svg;
          mermaidDiv.classList.add("mermaid-done");
        });
      });
      Reveal.layout();
    };
    Reveal.on("ready", (event) => renderMermaidDiagrams(event));
    Reveal.on("slidechanged", (event) => renderMermaidDiagrams(event));
    Reveal.on("ready", (event) => {
      reveal_init_callbacks.forEach((element) => {
        element(event);
      });
    });
    Reveal.on("slidechanged", (event) => {
      reveal_slidechange_callbacks.forEach((element) => {
        element(event);
      });
    });
    Reveal.on("resize", (event) => {
      reveal_resize_callbacks.forEach((element) => {
        element(event);
      });
    });
    Reveal.on("slidetransitionend", (event) => {
      console.log("slidetransitionend");
      reveal_slidetransitionend_callbacks.forEach((element) => {
        element(event);
      });
    });
  }
  var mermaidOptions;
})();
