const PROPERTIES_MAP = {
  "4-personal": "theme",
  "3-coding": "language",
}

const TAGS_MAP = {
  "4-personal": ["Personal/topic"],
  "3-coding": ["Programming/topic"],
}

async function topic(tp) {
  let folderId = tp.file.folder().toLowerCase();
  tp.hooks.on_all_templates_executed(() => Promise.all([
    setTopic(tp, folderId),
    setTags(tp, folderId),
  ]));
}

async function setTopic(tp, folderId) {
  let theme =  await tp.system.prompt("What is the main topic of this note?");
  theme = theme.toLowerCase();
  
  const file = tp.file.find_tfile(tp.file.path(true));
  await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter[PROPERTIES_MAP[folderId]] = theme;
  });

  tp.file.rename(theme.charAt(0).toUpperCase() + theme.slice(1) + " - " + tp.file.title)
}

async function setTags(tp, folderId) {
  const file = tp.file.find_tfile(tp.file.path(true));
  await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter.tags = TAGS_MAP[folderId];
  });
}

module.exports = topic;