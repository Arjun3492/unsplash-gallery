export interface  photo{
  id: string,
  description: string,
  alt_description: string,
  urls:{
    raw: string,
    regular: string,
  },
  links:{
    download: string,
  }
}
