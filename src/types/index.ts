export interface Products {
  id: number
  name: string
  image: string
  description: string
  price: {
    actualValue: number
  },
  variations: [
    {
      id: number
      color: string
    }
  ]
  amount: number
}
