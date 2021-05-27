export default interface ResponseData {
  id: string;
  title: string;
  description: string;
  thumbmail: {
    path: string;
    extension: string;
  };
}
