export interface Category {
  name: string
  description: string
  disabled: boolean
  image: string
  products: Product[]
}

export interface Product {
  name: string
  description: string
  disabled: boolean
  id: string
  image: string
  price: number
  priority: number
}

export interface CategoryQuery {
  categories: Category[]
}
