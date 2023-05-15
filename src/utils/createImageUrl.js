export class HardStatus {
    constructor(type) {
      this.baseUrl = "./images/status";
      this.type = type;
    }
  
    creatImageUrl(status) {
      let baseUrl = this.baseUrl;
      let type = this.type;
      let urls = [],
        i = 0;
      if (status == 1)
        return [`${baseUrl}/${type}off.svg`, `${baseUrl}/${type}on.svg`];
      while (i < 2) {
        if (status == 0) urls.push(`${baseUrl}/${type}off.svg`);
        if (status == 2) urls.push(`${baseUrl}/${type}on.svg`);
        i++;
      }
      return urls;
    }
  
    createStatus() {
      let status = [],
        i = 0; 
      while (i <= 2) {
        const obj = {
          status: i,
          src: this.creatImageUrl(i),
        };
        status.push(obj);
        i++;
      }
      return status;
    }
  }