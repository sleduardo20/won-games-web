import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined';
import Button, { ButtonProps } from 'components/Button';
import { useWishList } from 'hooks/useWishList';
import { useSession } from 'next-auth/client';

interface WishlistButtonProps extends Pick<ButtonProps, 'size'> {
  id: string;
  hasText?: boolean;
}

const WishlistButton = ({ id, hasText, size }: WishlistButtonProps) => {
  const [session] = useSession();

  const { isInWishList, addToWishList, removeFromWishList } = useWishList();

  const buttonText = isInWishList(id)
    ? 'Remove from Wishlist'
    : 'Add to Wishlist';

  const handleClick = () => {
    isInWishList(id) ? removeFromWishList(id) : addToWishList(id);
  };

  if (!session) {
    return null;
  }
  return (
    <Button
      onClick={handleClick}
      minimal
      size={size}
      icon={
        isInWishList(id) ? (
          <Favorite aria-label={buttonText} />
        ) : (
          <FavoriteBorder aria-label={buttonText} />
        )
      }
    >
      {buttonText}
    </Button>
  );
};

export default WishlistButton;
