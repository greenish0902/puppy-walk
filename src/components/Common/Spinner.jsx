import { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TransLayer = memo(styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  background-color: #00000062;
  width: 100%;
  height: 100%;
  font-weight: bold;

  img {
    width: 84px;
    height: 84px;
  }
`);

const Spinner = memo(({ visible, width, height }) => {
  return (
    visible && (
      <TransLayer>
        <div
          style={{
            position: 'absolute',
            zIndex: '10000',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <img
            src="https://media.giphy.com/media/fXWP44L91ioNZQSh2G/giphy.gif"
            alt="pawprint"
          />
        </div>
      </TransLayer>
    )
  );
});

Spinner.defaultProps = {
  visible: false,
  color: '#8bb2ee',
  width: 100,
  height: 100,
};

Spinner.propTypes = {
  visible: PropTypes.bool.isRequired,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Spinner;
