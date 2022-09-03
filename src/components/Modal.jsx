import { Overlay, Modalka } from '../styles/stylesModal';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class Modal extends Component {
  constructor(props) {
    super(props);
    const { modalPhoto, onCloseModal } = this.props;
    this.photo = modalPhoto;
    this.closeModal = onCloseModal;
  }

  static propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    modalPhoto: PropTypes.string.isRequired,
  };

  onEscape = event => {
    const { closeModal } = this;
    if (event.key === 'Escape') {
      closeModal();
    }
  };
  onOverLayClick = event => {
    const { closeModal } = this;
    const overlay = document.getElementById('overlay');
    if (event.target === overlay) {
      closeModal();
    }
  };

  componentDidMount() {
    const { onEscape } = this;
    window.addEventListener('keydown', onEscape);
  }

  componentWillUnmount() {
    const { onEscape } = this;
    window.removeEventListener('keydown', onEscape);
  }

  render() {
    return (
      <Overlay id="overlay" onClick={this.onOverLayClick}>
        <Modalka>
          <img src={this.photo} alt="modalPhoto" />
        </Modalka>
      </Overlay>
    );
  }
}
