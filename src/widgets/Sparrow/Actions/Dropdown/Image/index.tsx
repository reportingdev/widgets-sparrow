import React, {
    ImgHTMLAttributes,
    useState,
    useEffect,
    ReactElement
  } from 'react'
  
  const Image = ({
    src,
    alt,
    placeholder,
    ...props
  }: ImgHTMLAttributes<HTMLImageElement>): ReactElement => {
    const [image, setImage] = useState(src)
  
    useEffect(() => {
      if (src != null) {
        setImage(src)
      }
    }, [src])
  
    const handleError = (): void => {
      setImage(placeholder)
    }
  
    return <img src={image} alt={alt} onError={handleError} {...props} />
  }
  
  export default Image
  