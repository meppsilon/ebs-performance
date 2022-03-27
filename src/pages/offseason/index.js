import React, { useState } from 'react';
import classNames from 'classnames';
import CollapsibleSection from '../../components/CollapsibleSection';
import Layout from '../../components/Layout';

const sections = [
  {
    id: 'about',
    title: 'About',
    content: [
      <div className="mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus
        risus at ultrices mi tempus imperdiet nulla. Lobortis feugiat vivamus at
        augue eget. Quam id leo in vitae turpis massa. Phasellus faucibus
        scelerisque eleifend donec pretium vulputate.
      </div>,
      <div>
        Risus commodo viverra maecenas accumsan lacus vel. Aliquet nibh praesent
        tristique magna sit amet purus. Consequat nisl vel pretium lectus quam
        id leo. Amet risus nullam eget felis eget nunc. Quam id leo in vitae
        turpis massa sed elementum tempus. Libero nunc consequat interdum varius
        sit. Cursus vitae congue mauris rhoncus aenean vel elit. Praesent semper
        feugiat nibh sed pulvinar.
      </div>,
    ],
  },
  {
    id: 'program',
    title: 'The Program',
    content: [
      <div className="mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus
        risus at ultrices mi tempus imperdiet nulla. Lobortis feugiat vivamus at
        augue eget. Quam id leo in vitae turpis massa. Phasellus faucibus
        scelerisque eleifend donec pretium vulputate.
      </div>,
      <div>
        Risus commodo viverra maecenas accumsan lacus vel. Aliquet nibh praesent
        tristique magna sit amet purus. Consequat nisl vel pretium lectus quam
        id leo. Amet risus nullam eget felis eget nunc. Quam id leo in vitae
        turpis massa sed elementum tempus. Libero nunc consequat interdum varius
        sit. Cursus vitae congue mauris rhoncus aenean vel elit. Praesent semper
        feugiat nibh sed pulvinar.
      </div>,
    ],
  },
  {
    id: 'facility',
    title: 'Facility',
    content: [
      <div className="mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus
        risus at ultrices mi tempus imperdiet nulla. Lobortis feugiat vivamus at
        augue eget. Quam id leo in vitae turpis massa. Phasellus faucibus
        scelerisque eleifend donec pretium vulputate.
      </div>,
      <div>
        Risus commodo viverra maecenas accumsan lacus vel. Aliquet nibh praesent
        tristique magna sit amet purus. Consequat nisl vel pretium lectus quam
        id leo. Amet risus nullam eget felis eget nunc. Quam id leo in vitae
        turpis massa sed elementum tempus. Libero nunc consequat interdum varius
        sit. Cursus vitae congue mauris rhoncus aenean vel elit. Praesent semper
        feugiat nibh sed pulvinar.
      </div>,
    ],
  },
  {
    id: 'rehab',
    title: 'Sports rehab',
    content: [
      <div className="mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus
        risus at ultrices mi tempus imperdiet nulla. Lobortis feugiat vivamus at
        augue eget. Quam id leo in vitae turpis massa. Phasellus faucibus
        scelerisque eleifend donec pretium vulputate.
      </div>,
      <div>
        Risus commodo viverra maecenas accumsan lacus vel. Aliquet nibh praesent
        tristique magna sit amet purus. Consequat nisl vel pretium lectus quam
        id leo. Amet risus nullam eget felis eget nunc. Quam id leo in vitae
        turpis massa sed elementum tempus. Libero nunc consequat interdum varius
        sit. Cursus vitae congue mauris rhoncus aenean vel elit. Praesent semper
        feugiat nibh sed pulvinar.
      </div>,
    ],
  },
];

const OffSeason = () => {
  const [isShowing, setIsShowing] = useState(sections.map((sec) => sec.id));
  const showingNone = isShowing.length === 0;
  return (
    <Layout className="bg-ebsBlack">
      <div className="max-w-screen-md md:mx-auto mx-6 my-10">
        <h1 className="mb-0">NFL Offseason</h1>
        <div className="flex justify-end mb-10">
          <button
            className="p-2 border border-white text-white rounded-sm text-sm"
            onClick={() => {
              if (showingNone) {
                setIsShowing(sections.map((sec) => sec.id));
              } else {
                setIsShowing([]);
              }
            }}
          >
            <i
              className={classNames('fa text-white mr-3 transition-all', {
                'fa-plus': showingNone,
                'fa-minus': !showingNone,
              })}
              aria-hidden="true"
            />
            {isShowing.length === 0 ? 'Expand all' : 'Collapse all'}
          </button>
        </div>
        {sections.map((sec) => (
          <CollapsibleSection
            key={sec.id}
            title={sec.title}
            isShowing={isShowing.includes(sec.id)}
            onChange={() => {
              const isShowingSection = isShowing.includes(sec.id);
              console.log('isShowingSection', isShowingSection);
              if (!isShowingSection) {
                setIsShowing(isShowing.concat(sec.id));
              } else {
                const index = isShowing.indexOf(sec.id);
                const newIsShowing = isShowing
                  .slice(0, index)
                  .concat(isShowing.slice(index + 1));
                setIsShowing(newIsShowing);
              }
            }}
          >
            {sec.content}
          </CollapsibleSection>
        ))}
      </div>
    </Layout>
  );
};

export default OffSeason;
