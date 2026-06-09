(function () {
  const CMS = window.CMS;
  const createClass = window.createClass;
  const h = window.h;

  if (!CMS || !createClass || !h) {
    return;
  }

  CMS.registerPreviewStyle("/admin/preview.css");

  function toJS(value) {
    if (!value) return value;
    if (typeof value.toJS === "function") return value.toJS();
    return value;
  }

  function normalizeImagePath(image) {
    if (!image || typeof image !== "string") return "";
    if (/^(https?:)?\/\//.test(image)) return image;
    return image.startsWith("/") ? image : "/" + image.replace(/^\.?\//, "");
  }

  const HomeFeaturesPreview = createClass({
    render: function () {
      const data = toJS(this.props.entry.get("data")) || {};
      const features = Array.isArray(data.features) ? data.features : [];
      const getAsset = this.props.getAsset;

      return h(
        "div",
        { className: "decap-home-features-preview" },
        h(
          "div",
          { className: "strip strip-grey" },
          h(
            "div",
            { className: "container pt-6 pb-6 pt-md-7 pb-md-10" },
            h(
              "div",
              { className: "row justify-content-center" },
              features.map(function (feature, index) {
                const title = feature && feature.title ? feature.title : "Untitled";
                const description = feature && feature.description ? feature.description : "";
                const imagePath = normalizeImagePath(feature && feature.image);
                const imageAsset = imagePath && getAsset ? getAsset(imagePath) : null;
                const imageSrc =
                  imageAsset && typeof imageAsset.toString === "function"
                    ? imageAsset.toString()
                    : imagePath;

                return h(
                  "div",
                  { className: "col-12 col-md-6 col-lg-4 mb-2", key: title + "-" + index },
                  h(
                    "div",
                    { className: "feature" },
                    imageSrc
                      ? h(
                          "div",
                          { className: "feature-image" },
                          h("img", { alt: title + " icon", src: imageSrc })
                        )
                      : null,
                    h(
                      "a",
                      { href: "/services/", onClick: function (event) { event.preventDefault(); } },
                      h("h2", { className: "feature-title" }, title)
                    ),
                    h(
                      "div",
                      { className: "feature-content" },
                      h("p", null, description)
                    )
                  )
                );
              })
            )
          )
        )
      );
    },
  });

  CMS.registerPreviewTemplate("home_features", HomeFeaturesPreview);
})();
