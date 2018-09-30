class Exporter {
  constructor(fileWriter, logger) {
    this.fileWriter = fileWriter;
    this.logger = logger;
  }

  run() {
    this.fileWriter.write();
  }
}

module.exports = Exporter;
