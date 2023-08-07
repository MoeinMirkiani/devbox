import { images } from "~/db/images"

export const useFindImage = (id: string) => {
    return images.find((image) => image.id === id)
}
