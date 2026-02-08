import { supabase } from './supabase'

export interface OrderRecord {
  order_number: string
  email: string
  first_name: string
  last_name: string
  address: string
  apartment: string
  city: string
  province: string
  postal_code: string
  country: string
  phone: string
  items: { id: string; name: string; price: number; quantity: number; image: string; color?: string }[]
  total: number
  tax: number
  final_total: number
  order_date: string
  status: string
}

export async function saveOrder(order: OrderRecord): Promise<boolean> {
  try {
    const { error } = await supabase.from('orders').insert([order])
    if (error) {
      console.error('Supabase insert error:', error)
      return false
    }
    return true
  } catch (e) {
    console.error('Error saving order to Supabase:', e)
    return false
  }
}

export async function getOrdersByEmail(email: string): Promise<OrderRecord[]> {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('email', email.toLowerCase())
      .order('order_date', { ascending: false })
    if (error) {
      console.error('Supabase select error:', error)
      return []
    }
    return data || []
  } catch (e) {
    console.error('Error fetching orders from Supabase:', e)
    return []
  }
}

export async function getOrderByNumber(orderNumber: string): Promise<OrderRecord | null> {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('order_number', orderNumber)
      .single()
    if (error) {
      console.error('Supabase select error:', error)
      return null
    }
    return data
  } catch (e) {
    console.error('Error fetching order from Supabase:', e)
    return null
  }
}
