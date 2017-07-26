import { compose } from 'recompose';

import Protected from '../shared/protected';
import WithLoading from '../shared/with-loading';
import LeagueTables from './league-tables';

const ProtectedWithLoading = compose(
    Protected,
    WithLoading
);

export default ProtectedWithLoading(LeagueTables);