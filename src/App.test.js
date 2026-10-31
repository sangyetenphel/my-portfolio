import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { routerFuture } from './routerFuture';
import { projectsData } from './components/portfolio/Data';

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]} future={routerFuture}>
      <App />
    </MemoryRouter>
  );

test('home page shows the main sections', () => {
  renderAt('/');
  expect(screen.getByRole('heading', { level: 1, name: /sangye tengkhar/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Qualifications' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Portfolio' })).toBeInTheDocument();
});

test('portfolio lists every project under All and filters by type', () => {
  renderAt('/');
  projectsData.forEach((project) => {
    expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument();
  });

  fireEvent.click(screen.getByText('mobile'));
  const mobile = projectsData.filter((project) => project.category === 'mobile');
  const web = projectsData.filter((project) => project.category === 'web');
  mobile.forEach((project) => {
    expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument();
  });
  web.forEach((project) => {
    expect(screen.queryByRole('heading', { name: project.title })).not.toBeInTheDocument();
  });
});

test('project page shows the project details', () => {
  const project = projectsData[0];
  renderAt(`/project/${project.id}`);
  expect(screen.getByText(project.project_overview)).toBeInTheDocument();
});

test('unknown project id shows a not found message instead of crashing', () => {
  renderAt('/project/9999');
  expect(screen.getByText('Project not found')).toBeInTheDocument();
});
