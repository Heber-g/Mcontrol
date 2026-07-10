export class defaultResponseDto {
  status_code;
  data;
  meta;
  
  constructor(
    data: any, 
    currentPage = 1, 
    itemsPerPage = 10,
    totalItems = 0, 
    filters = [], 
    status_code = 200
  ) {
    this.status_code = status_code;
    this.data = Array.isArray(data) ? data : [data];
    const ipp = Number(itemsPerPage) || 0;
    const tp = ipp > 0 ? Math.ceil(Number(totalItems) / ipp) : 0;

    this.meta = {
      currentPage: Number(currentPage) || 1,
      itemsPerPage: ipp,
      totalItems: Number(totalItems) || 0,
      totalPages: tp,
      filters: Array.isArray(filters) ? filters : [],
    };
  }
}