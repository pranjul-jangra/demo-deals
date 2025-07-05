"use client"

import { toast } from "sonner"

export function useToast() {
  return {
    toast,
    success: toast.success,
    error: toast.error,
    warning: toast.warning,
    info: toast.info,
    custom: toast.custom
  }
}
