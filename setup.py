from setuptools import setup, find_packages

setup(
    name='countries_cities',
    version='0.1.0',
    packages=find_packages(),
    description="setup countries_cities", install_requires=['flask', 'vk_api']
)