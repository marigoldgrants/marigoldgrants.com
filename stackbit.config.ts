import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  nodeVersion: "18",
  devCommand: "hugo server -D -E -F --port {PORT} --bind 127.0.0.1",

  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      assetsConfig: {
        referenceType: "static",
        staticDir: "static",
        uploadDir: "uploads",
        publicPath: "/"
      },
      objectTypeKey: "sb_model",
      models: [
        {
          name: "Home",
          type: "page",
          label: "Home",
          urlPath: "/",
          filePath: "content/_index.md",
          singleInstance: true,
          fields: [
            { name: "title", type: "string", required: true },
            { name: "intro_image", type: "image" },
            { name: "intro_image_absolute", type: "boolean", default: false },
            { name: "intro_image_hide_on_mobile", type: "boolean", default: false },
            { name: "markdown_content", type: "markdown" }
          ]
        },
        {
          name: "About",
          type: "page",
          label: "About Page",
          urlPath: "/about",
          filePath: "content/about/_index.md",
          singleInstance: true,
          fields: [
            { name: "title", type: "string", required: true },
            { name: "intro_image", type: "image" },
            { name: "intro_image_absolute", type: "boolean", default: false },
            { name: "intro_image_hide_on_mobile", type: "boolean", default: false },
            { name: "markdown_content", type: "markdown" }
          ]
        },
        {
          name: "ServicesIndex",
          type: "page",
          label: "Services Page",
          urlPath: "/services",
          filePath: "content/services/_index.md",
          singleInstance: true,
          fields: [
            { name: "title", type: "string", required: true },
            { name: "intro_image", type: "image" },
            { name: "intro_image_absolute", type: "boolean", default: false },
            { name: "intro_image_hide_on_mobile", type: "boolean", default: false },
            { name: "markdown_content", type: "markdown" }
          ]
        },
        {
          name: "Contact",
          type: "page",
          label: "Contact Page",
          urlPath: "/contact",
          filePath: "content/contact.md",
          singleInstance: true,
          fields: [
            { name: "title", type: "string", required: true },
            { name: "date", type: "datetime" },
            { name: "layout", type: "string" },
            { name: "menu", type: "object", fields: [{ name: "main", type: "object", fields: [] }] },
            { name: "markdown_content", type: "markdown" }
          ]
        },
        {
          name: "NotFound",
          type: "page",
          label: "404 Page",
          urlPath: "/404",
          filePath: "content/404/_index.md",
          singleInstance: true,
          fields: [{ name: "title", type: "string", required: true }]
        },
        {
          name: "Service",
          type: "page",
          label: "Service",
          urlPath: "/services/{slug}",
          filePath: "content/services/{slug}.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "date", type: "datetime" },
            { name: "featured", type: "boolean", default: false },
            { name: "weight", type: "number" },
            { name: "markdown_content", type: "markdown" }
          ]
        },
        {
          name: "TeamMember",
          type: "page",
          label: "Team Member",
          urlPath: "/about/{slug}",
          filePath: "content/about/{slug}.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "date", type: "datetime" },
            { name: "image", type: "image" },
            { name: "jobtitle", type: "string" },
            { name: "linkedinurl", type: "string" },
            { name: "weight", type: "number" },
            { name: "markdown_content", type: "markdown" }
          ]
        }
      ]
    })
  ]
});
