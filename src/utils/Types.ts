export interface ActivationStatus {
  isActive: boolean,
  creationDate: string,
  deactivationDate: string | null,
}

export interface Service {
    id: string,
    name: string,
    pathImage: string,
    price: number,
    description: string,
    estimatedDuration: string,
    activationStatus: ActivationStatus,
}
export interface Product {
    id: string,
    name: string,
    pathImage: string,
    price: number,
    description: string,
    categories: Category[],
    activationStatus: ActivationStatus,
}
export interface Category {
    id: string,
    name: string,
    pathImage: string,
    cardColor: string,
    products: Product[],
    activationStatus: ActivationStatus,
}
export interface Customer {
    id: string,
    name: string,
    email: string,
    birthDate: string,
    pathImage: string,
    telephones: Telephones,
    address: Address,
    pets:Pet[],
    orders:Order[],
}
export interface Telephones {
    id: string,
    phoneOne: string,
    phoneTwo: string,
}
export interface Address {
    id: string,
    state: string,
    city: string,
    neighborhood: string,
    street: string,
    number: number,
    complement: string,
    postalCode: string,
}
export interface CustomerPets {
    owner: Owner,
    pets: Pet[],
}
export interface CustomerOrders {

}
export interface Pet {
    id: string,
    name: string,
    birthDate: string,
    race: string,
    size: string,
    gender: string,
    species: string,
    note: string,
    pathImage: string,
    owner:Owner,
    activationStatus: ActivationStatus
}
type Owner={
    id: string,
}

export interface OrderItem {
    id:string,
    price:number,
    quantity: number,
    product:Product
}

export interface Order {
    id: string ,
    moment: string,
    paymentStatus: string, 
    totalPrice: number,
    customer: null,
    orderItems: OrderItem[]
}

export interface Paginacao<T> {
  pageSize: number,
  totalElements: number,
  totalPages: number,
  currentPage: number,
  nextPage: number,
  previousPage: number,
  content: T[],
}