import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Conteiner } from './Container/Conteiner';
import { Loader } from './Loader/Loader';
import { fetchImages } from 'Services/api';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends React.Component {
  state = {
    imagesData: [],
    page: 1,
    userInput: '',
    loading: false,
    total: 0,
    modalImageUrl: '',
    isModalOpen: false,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const images = await fetchImages(this.state.userInput, this.state.page);
      console.log(images);
      this.setState({ imagesData: [...images.hits], total: images.total });
    } catch (error) {
      console.error();
    } finally {
      this.setState({ loading: false });
    }
  }

  async componentDidUpdate(_, prevState) {
    if (
      this.state.userInput !== prevState.userInput ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true });
        const images = await fetchImages(this.state.userInput, this.state.page);
        console.log(images);
        this.setState(prevState => ({
          imagesData: [...prevState.imagesData, ...images.hits],
          total: images.total,
        }));
      } catch (error) {
        console.error();
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  /* modal */
  openModal = imgUrl => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
      modalImageUrl: imgUrl,
    }));
  };

  closeModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };
  /* */

  /* form submit  */
  onSubmit = event => {
    event.preventDefault();
    const userInput = event.currentTarget.elements.userInput.value;
    this.setState({ userInput: userInput, page: 1, imagesData: [] });
  };
  /*  */

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        <Conteiner>
          <ImageGallery
            imagesData={this.state.imagesData}
            openModal={this.openModal}
          />
          {this.state.loading === true ? <Loader /> : null}
          {this.state.total > this.state.imagesData.length ? (
            <Button click={this.handleLoadMore} />
          ) : null}
          {this.state.isModalOpen && (
            <Modal
              modalImageUrl={this.state.modalImageUrl}
              closeModal={this.closeModal}
            />
          )}
        </Conteiner>
      </div>
    );
  }
}
