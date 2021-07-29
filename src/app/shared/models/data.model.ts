export interface DataModel {
  photos: {
    page: number,
    pages: number,
    perpage: number,
    total: number,
    photo: [
      { farm: number,
        id: string,
        isfamily: number,
        isfriend: number,
        ispublic: number,
        owner: string,
        secret: string,
        server: string,
        title: string,
      },
    ]
  }
  stat: string
}

export interface PhotosInterface {
  farm: number,
  id: string,
  isfamily: number,
  isfriend: number,
  ispublic: number,
  owner: string,
  secret: string,
  server: string,
  title: string,
}
