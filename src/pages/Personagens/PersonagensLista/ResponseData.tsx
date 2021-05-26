export default interface ResponseData {
  id: string;
  name: string;
  description: string;
  thumbmail: {
    path: string;
    extension: string;
  };
}
