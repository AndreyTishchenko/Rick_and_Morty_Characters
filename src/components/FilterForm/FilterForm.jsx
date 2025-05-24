import { useState, useCallback } from 'react';
import { FilterSelect } from './FilterSelect';
import { FilterInput } from './FilterInput';
import { FilterButton } from './FilterButton';
import { useData } from '../providers/DataProvider';
import { Form } from './styles/form.styled';

export function FilterForm() {
  const { setFilters, setApiURL } = useData();

  const [localFilters, setLocalFilters] = useState({
    name: '',
    status: '',
    species: '',
    type: '',
    gender: ''
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setLocalFilters((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      setFilters(localFilters);

      const params = new URLSearchParams();

      Object.entries(localFilters).forEach(([key, value]) => {
        if (value.trim() !== '') {
          params.append(key, value);
        }
      });

      const url = `https://rickandmortyapi.com/api/character/?${params.toString()}`;
      setApiURL(url);
    },
    [localFilters, setFilters, setApiURL]
  );

  const handleReset = useCallback(() => {
    const resetState = {
      name: '',
      status: '',
      species: '',
      type: '',
      gender: ''
    };

    setLocalFilters(resetState);
    setFilters(resetState);
    setApiURL('https://rickandmortyapi.com/api/character/');
  }, [setFilters, setApiURL]);

  return (
    <Form onSubmit={handleSubmit}>
      <FilterSelect
        name="status"
        label="Status"
        options={['Alive', 'Dead', 'Unknown']}
        value={localFilters.status}
        onChange={handleChange}
      />
      <FilterSelect
        name="gender"
        label="Gender"
        options={['Male', 'Female', 'Genderless', 'Unknown']}
        value={localFilters.gender}
        onChange={handleChange}
      />
      <FilterSelect
        name="species"
        label="Species"
        options={[
          'Alien',
          'Animal',
          'Cronenberg',
          'Disease',
          'Human',
          'Humanoid',
          'Mythological Creature',
          'Poopybutthole',
          'Robot',
          'unknown'
        ]}
        value={localFilters.species}
        onChange={handleChange}
      />
      <FilterInput
        name="name"
        label="Name"
        placeholder="name"
        value={localFilters.name}
        onChange={handleChange}
      />
      <FilterInput
        name="type"
        label="Type"
        placeholder="type"
        value={localFilters.type}
        onChange={handleChange}
      />
      <FilterButton type="submit" variant="apply">
        Apply
      </FilterButton>
      <FilterButton type="button" variant="reset" onClick={handleReset}>
        Reset
      </FilterButton>
    </Form>
  );
}
