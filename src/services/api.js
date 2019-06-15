import request from '@/utils/request';

export async function getChartData () {
  return request(`/api/getChartMock`);
};