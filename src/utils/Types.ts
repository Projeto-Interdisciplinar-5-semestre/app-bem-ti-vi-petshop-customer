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
    rate: number,
    estimatedDuration: string,
    activationStatus: ActivationStatus,
}

export interface Product {
    id: string,
    name: string,
    pathImage: string,
    price: number,
    description: string,
    rate: number,
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
export type CustomerCreate = {
    name: string;
    email: string;
    password: string;
    birthDate: string;
    telephones: {
        phoneOne: string;
        phoneTwo: string;
    };
    address: {
        state: string;
        city: string;
        neighborhood: string;
        street: string;
        number: string;
        complement: string;
        postalCode: string;
    };
};

export interface Customer {
    id: string,
    name: string,
    email: string,
    birthDate: string,
    pathImage: string,
    telephones: Telephones,
    isEmailActive: boolean,
    address: Address,
    pets: Pet[],
    orders: Order[],
    activationStatus: ActivationStatus,
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
    number: string,
    complement: string,
    postalCode: string,
}
export interface CustomerPets {
    owner: Owner,
    pets: Pet[],
}

export interface Pet {
    id: string,
    name: string,
    birthDate: string,
    race: string,
    size: string,
    gender: string,
    species: string,
    details: string,
    pathImage: string,
    owner: Owner,
    activationStatus: ActivationStatus
}
type Owner = {
    id: string,
}

export interface OrderItemForCar {
    id: string,
    quantity: number,
    product: ProductForCar
}

export interface ProductForCar {
    name: string,
    pathImage: string,
    price: number,
}

export interface Passwords {
    passwordOld: string,
    passwordNew: string
};

export interface Order {
    id: string,
    moment: string,
    paymentStatus: string,
    totalPrice: number,
    customer: Customer,
    orderItems: OrderItem[],
    paymentId: string | null,
    deliverToAddress: boolean,
    methodPaymentByPix: boolean,
    pix: {
        qrCode: string,
        qrCodeBase64: string
    } | null
}

export interface OrderItem {
    id: string,
    price: number,
    quantity: number,
    product: Product
}

export interface Paginacao<T> {
    pageSize: number,
    totalElements: number,
    totalPages: number,
    currentPage: number,
    nextPage: number,
    previousPage: number,
    content: T[],
    totalRate: number
}

export interface Error {
    code: string,
    status: string,
    message: string,
    timestamp: string,
    path: string,
    errorFields: {
        name: string,
        description: string,
        value: string,
    }[] | null
};

export interface Comment {
    id: string,
    title: string,
    message: string,
    typeComment: string,
    rate: number,
    product: Product | null,
    service: Service | null,
    customer: Customer,
    activationStatus: ActivationStatus
}

export interface Appointment {
    id: string,
    dateTime: Date,
    customer: Customer,
    price: number,
    paymentStatus: string,
    service: Service
    paymentId: string | null,
    methodPaymentByPix: boolean
    pet: Pet,
    pix: {
        qrCode: string,
        qrCodeBase64: string
    } | null
}

export interface PaymentStatus {
    id: string,
    paymentStatus: string
}

export interface AdressByCEP {
    logradouro: string,
    bairro: string,
    localidade: string,
    estado: string
}

export interface ChatMessage {
    userId: string;
    userName: string
    sender: 'ADMINISTRATOR' | 'CUSTOMER';
    content: string;
    moment: string;
}