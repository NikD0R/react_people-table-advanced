type Props = {
  query: string;
  handleQueryChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
};

export const NameFilter: React.FC<Props> = ({ query, handleQueryChange }) => {
  const normalizedQuery = query.trim().toLowerCase();

  return (
    <div className="panel-block">
      <p className="control has-icons-left">
        <input
          data-cy="NameFilter"
          type="search"
          className="input"
          placeholder="Search"
          value={normalizedQuery}
          onChange={handleQueryChange}
        />

        <span className="icon is-left">
          <i className="fas fa-search" aria-hidden="true" />
        </span>
      </p>
    </div>
  );
};
