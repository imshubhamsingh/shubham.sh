import * as React from 'react';
import Modal from '~/components/Modal/Modal';

interface IDetails {
  parentRef: React.RefObject<HTMLDivElement>;
}

function Details({ parentRef }: IDetails) {
  return <Modal bodyRef={parentRef}>Hii</Modal>;
}

export default Details;
