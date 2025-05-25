"use server"

export async function adminLogin(password: string) {
  // Basit bir şifre kontrolü
  // Gerçek uygulamada daha güvenli bir yöntem kullanılmalıdır
  if (password === "admin") {
    return { success: true }
  }

  return { success: false }
}
