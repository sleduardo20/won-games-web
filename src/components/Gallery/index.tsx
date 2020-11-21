import { useEffect, useState } from 'react';
import {
  ArrowBackIos as ArrowLeft,
  ArrowForwardIos as ArrowRight,
  Close,
} from 'styled-icons/material-outlined';

import Slider, { SliderSettings } from '../Slider';

import { Container, Modal, IconClose } from './styles';

const settings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previews image" />,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.1,
        draggable: true,
      },
    },
  ],
};

export type GalleryImageProps = {
  src: string;
  label: string;
};

export interface GalleryProps {
  items: GalleryImageProps[];
}

const Gallery = ({ items }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyup = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false);
    };

    window.addEventListener('keyup', handleKeyup);

    return () => {
      window.removeEventListener('keyup', handleKeyup);
    };
  }, []);

  return (
    <Container>
      <Slider settings={settings}>
        {items.map(item => (
          <img
            role="button"
            key={`thumb-${item.src}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            onClick={() => {
              setIsOpen(true);
            }}
          />
        ))}
      </Slider>

      <Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <IconClose
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <Close size={40} />
        </IconClose>
      </Modal>
    </Container>
  );
};

export default Gallery;
