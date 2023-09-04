export interface MenuItem {
  id: string
  name: string
  description: string
  disabled: boolean
  image: string
  products: Product[]
}

interface Product {
  name: string
  description: string
  disabled: boolean
  id: string
  image: string
  price: number
  priority: number
}
