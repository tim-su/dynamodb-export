class FileWriter {
  constructor(path, fileName, logger) {
    this.path = path;
    this.fileName = fileName;
    this.logger = logger;
  }

  write() {
    this.logger.info(`Writing to ${this.path}/${this.fileName}`);
    this.logger.info('Done.');
  }
}

module.exports = FileWriter;
