import fs from 'fs';

export type portMeta = {
  path: string;
  manufacturer?: string;
  serialNumber?: string;
  locationId?: string;
  vendorId?: string;
  productId?: string;
};

/**
 * Get the DMX interface port
 * @param {string} manufacturer ID interface by manufacturer
 * @returns {portMeta} port metadata
 */
export const getDMXInterfacePort = (manufacturer: string): portMeta => {
  const appRoot = process.cwd();
  return JSON.parse(fs.readFileSync(appRoot + '/port.json', 'utf8')).filter(
    (port: portMeta) => port?.manufacturer === manufacturer
  )[0];
};
