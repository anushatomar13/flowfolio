import { useUser } from "@clerk/nuxt/composables"

export const useAuth = () => {
  const { user, isLoaded, isSignedIn } = useUser()

  const requireAuth = () => {
    if (!isSignedIn.value) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Authentication required'
      })
    }
  }

  return {
    user: readonly(user),
    isLoaded: readonly(isLoaded),
    isSignedIn: readonly(isSignedIn),
    requireAuth
  }
}
