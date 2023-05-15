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
  // 创建通用
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
  // 创建single
  createSingleStatus() {
    let baseUrl = this.baseUrl;
    let type = this.type;
    return [
      { status: 0, src: [`${baseUrl}/${type}off.svg`] },
      { status: 1, src: [`${baseUrl}/${type}on.svg`] },
    ];
  }
}
