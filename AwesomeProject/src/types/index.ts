export type OffersType = 
{
    id: number,
    offerType: string,
    title: string,
    description: string,
    tagIds:Array<number>,
    image: string,
    price: number,
    promoted?: boolean
}

export type UserType = 
{
    id:number,
    name:string,
    selectedOffers: Array<number>
}

export type listWithAmount = 
{
    currentAvailableOffers: Array<OffersType>,
    totalAmount: number
}

type Header = 
{
    'Content-Type': string
}

export type ReqOptions = {
    url: string,
    method: string,
    headers?:Header,
    body: object|null
}

export type ErrorObj = 
{
    error:Boolean,
    errorMessage:String
}