import FormResetPassword from 'components/FormResetPassword';

import Auth from 'templates/Auth';

export default function ResetPassword() {
  return (
    <Auth title="Reset new password">
      <FormResetPassword />
    </Auth>
  );
}
