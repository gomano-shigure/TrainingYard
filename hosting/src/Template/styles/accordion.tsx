export function AccordionAnimation(
  targetElement: HTMLElement,
  detailElement: HTMLDetailsElement,
  setOpen: React.Dispatch<React.SetStateAction<string | false>>,
  AccordionKey: string,
) {
  const animTiming = {
    duration: 200,
    easing: 'ease-in-out',
  };
  const closingAnimation = (targetElement: HTMLElement) => [
    {
      height: `${targetElement.offsetHeight}px`,
      opacity: 1,
    },
    {
      height: 0,
      opacity: 0,
    },
  ];
  // アコーディオンを開くときのキーフレーム
  const openingAnimation = (targetElement: HTMLElement) => [
    {
      height: 0,
      opacity: 0,
    },
    {
      height: `${targetElement.offsetHeight}px`,
      opacity: 1,
    },
  ];

  if (detailElement.open) {
    targetElement.animate(closingAnimation(targetElement), animTiming).onfinish = () => {
      detailElement.removeAttribute('open');
      setOpen(false);
    };
  } else {
    detailElement.setAttribute('open', 'true');
    targetElement.animate(openingAnimation(targetElement), animTiming).onfinish = () => {
      setOpen(AccordionKey);
    };
  }
}
