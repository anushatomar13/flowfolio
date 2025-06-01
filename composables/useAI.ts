export const useAI = () => {
  const generateBio = async (name: string, skills: string[], experience: string): Promise<string> => {
    try {
      const response = await $fetch<{ data: string }>('/api/ai/generate', {
        method: 'POST',
        body: {
          type: 'bio',
          data: { name, skills, experience }
        }
      })
      return response.data
    } catch (error) {
      console.error('AI generation failed:', error)
      throw error
    }
  }

  const generateProjectDescription = async (
    title: string,
    technologies: string[],
    brief: string
  ): Promise<string> => {
    try {
      const response = await $fetch<{ data: string }>('/api/ai/generate', {
        method: 'POST',
        body: {
          type: 'project',
          data: { title, technologies, brief }
        }
      })
      return response.data
    } catch (error) {
      console.error('AI generation failed:', error)
      throw error
    }
  }

  return {
    generateBio,
    generateProjectDescription
  }
}

