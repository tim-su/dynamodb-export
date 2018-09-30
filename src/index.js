const Logger = require('./logger');
const FileWriter = require('./file-writer');
const Exporter = require('./exporter');

const logger = new Logger();
const fileWriter = new FileWriter('/tmp', 'export.csv', logger);

new Exporter(fileWriter, logger).run();
