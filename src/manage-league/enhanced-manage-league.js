import { compose } from 'recompose';

import Protected from '../shared/protected';
import WithLoading from '../shared/with-loading';
import ManageLeague from './manage-league';

const ProtectedWithLoading = compose(
    Protected,
    WithLoading
);

export default ProtectedWithLoading(ManageLeague);