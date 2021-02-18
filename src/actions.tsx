export const addImage = (id: number) => {
    return {
        type: "ADD_IMAGE",
        payload: id
    }
}

export const deleteImage = (id: number) => {
    return {
        type: "DELETE_IMAGE",
        payload: id
    }
}

export const setImages = (images: any) => {
    return {
        type: "SET_IMAGES",
        payload: images
    }
}