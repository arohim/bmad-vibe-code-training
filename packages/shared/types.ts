// Shared TypeScript types for Logistics CRM MVP

// User types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'operator' | 'viewer';
  created_at: string;
  updated_at: string;
}

// Customer types  
export interface Customer {
  id: string;
  company_name: string;
  contact_person: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postal_code: string;
  country: string;
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
}

// Shipment types
export interface Shipment {
  id: string;
  customer_id: string;
  shipment_number: string;
  origin: string;
  destination: string;
  status: 'pending' | 'in_transit' | 'delivered' | 'cancelled';
  weight: number;
  dimensions: string;
  value: number;
  currency: string;
  estimated_delivery: string;
  actual_delivery?: string;
  created_at: string;
  updated_at: string;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  count: number;
  page: number;
  per_page: number;
  total_pages: number;
}

// Form types
export interface CustomerFormData {
  company_name: string;
  contact_person: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postal_code: string;
  country: string;
}

export interface ShipmentFormData {
  customer_id: string;
  origin: string;
  destination: string;
  weight: number;
  dimensions: string;
  value: number;
  currency: string;
  estimated_delivery: string;
}

// Dashboard types
export interface DashboardStats {
  total_customers: number;
  total_shipments: number;
  pending_shipments: number;
  in_transit_shipments: number;
  delivered_shipments: number;
  revenue_this_month: number;
}