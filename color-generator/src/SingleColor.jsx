import React from 'react'
import { toast } from 'react-toastify';

const SingleColor = ({index, color}) => {
  const {hex, weight} = color;
  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Text copied to clipboard');
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  }
  return (
    <article className={index > 10 ? 'color color-light' : 'color'} style={{backgroundColor: `#${hex}`}} onClick={() => {copyToClipboard(hex)}}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  )
}

export default SingleColor